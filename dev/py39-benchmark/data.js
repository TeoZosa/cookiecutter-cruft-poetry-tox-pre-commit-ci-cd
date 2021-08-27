window.BENCHMARK_DATA = {
  "lastUpdate": 1630075290578,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "4a6e772eb2dbf5bf6fc87f1afc106b41adb87e31",
          "message": "Merge pull request #305 from TeoZosa/dependabot/pip/myst-parser-0.15.2",
          "timestamp": "2021-08-27T14:30:52Z",
          "tree_id": "718148620ec042b7b7be78bcf1f3de1cc43b1d8c"
        },
        "date": 1630075289101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16532.479980133143,
            "unit": "iter/sec",
            "range": "stddev: 0.000003019185605811985",
            "extra": "mean: 60.486992949738124 usec\nrounds: 7801"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4982197.550935467,
            "unit": "iter/sec",
            "range": "stddev: 1.4870422923906866e-8",
            "extra": "mean: 200.71464243965445 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14647.922626857378,
            "unit": "iter/sec",
            "range": "stddev: 0.000003146186623352362",
            "extra": "mean: 68.26906623376559 usec\nrounds: 8621"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 150274.9474772731,
            "unit": "iter/sec",
            "range": "stddev: 0.000004691811170005624",
            "extra": "mean: 6.654469136655233 usec\nrounds: 40323"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16609.05260883091,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022466778540793843",
            "extra": "mean: 60.208130081321286 usec\nrounds: 6888"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5011702.399789805,
            "unit": "iter/sec",
            "range": "stddev: 2.4131963154425302e-8",
            "extra": "mean: 199.5329970195802 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}
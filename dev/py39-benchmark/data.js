window.BENCHMARK_DATA = {
  "lastUpdate": 1628256992192,
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
          "id": "115f94714301020148b942f451d9d7af44135da5",
          "message": "Merge pull request #268 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.2.3",
          "timestamp": "2021-08-06T13:10:57Z",
          "tree_id": "79b50b027958d6cd9488f67e33997d360e53dcaf"
        },
        "date": 1628256990757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16585.49614344319,
            "unit": "iter/sec",
            "range": "stddev: 0.000002751838013908686",
            "extra": "mean: 60.29364399782119 usec\nrounds: 7514"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5024400.548074579,
            "unit": "iter/sec",
            "range": "stddev: 1.1122614992482102e-8",
            "extra": "mean: 199.0287180394265 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14391.561602314096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000633651651619268",
            "extra": "mean: 69.48516273864294 usec\nrounds: 8953"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 155019.91560401177,
            "unit": "iter/sec",
            "range": "stddev: 3.471247738639492e-7",
            "extra": "mean: 6.450784056381727 usec\nrounds: 35588"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16349.534862686958,
            "unit": "iter/sec",
            "range": "stddev: 0.000006013573624496702",
            "extra": "mean: 61.16381954585193 usec\nrounds: 13793"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5017681.410945059,
            "unit": "iter/sec",
            "range": "stddev: 1.2073755496534223e-8",
            "extra": "mean: 199.2952358072032 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1628515895545,
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
          "id": "3623d72d542b47dc322965ec83b59791f3de8cea",
          "message": "Merge pull request #275 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-2.14.0",
          "timestamp": "2021-08-09T13:14:35Z",
          "tree_id": "dc131b9cf84cfe22d4bb71188b3e020d31b8298f"
        },
        "date": 1628515894245,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15525.184542893843,
            "unit": "iter/sec",
            "range": "stddev: 0.000035213337250254195",
            "extra": "mean: 64.4114726776448 usec\nrounds: 12755"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5564411.072676284,
            "unit": "iter/sec",
            "range": "stddev: 9.367479280280794e-8",
            "extra": "mean: 179.71353786384543 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13167.161439592406,
            "unit": "iter/sec",
            "range": "stddev: 0.0000620563832853038",
            "extra": "mean: 75.94651319403548 usec\nrounds: 7200"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 138831.4478514817,
            "unit": "iter/sec",
            "range": "stddev: 0.000010662819074702027",
            "extra": "mean: 7.202978975410342 usec\nrounds: 9941"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15546.78594603256,
            "unit": "iter/sec",
            "range": "stddev: 0.000021081184443375317",
            "extra": "mean: 64.32197648255354 usec\nrounds: 11821"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5694967.502323714,
            "unit": "iter/sec",
            "range": "stddev: 9.303789158762301e-8",
            "extra": "mean: 175.59362710925328 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}
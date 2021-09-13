window.BENCHMARK_DATA = {
  "lastUpdate": 1631543935658,
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
          "id": "eca744fdf02be9d24eeae75209288a6ec857908a",
          "message": "Merge pull request #329 from TeoZosa/dependabot/pip/hypothesis-6.21.1",
          "timestamp": "2021-09-13T14:09:59Z",
          "tree_id": "d526f6c56b904d12be2f8b556d3555aad7d05ef2"
        },
        "date": 1631543932874,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15663.147685464308,
            "unit": "iter/sec",
            "range": "stddev: 0.00001034024019056981",
            "extra": "mean: 63.84412763521465 usec\nrounds: 6926"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4549727.233198422,
            "unit": "iter/sec",
            "range": "stddev: 1.4621465446545446e-7",
            "extra": "mean: 219.79339611957985 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13434.148715711714,
            "unit": "iter/sec",
            "range": "stddev: 0.00001237981132025723",
            "extra": "mean: 74.43716912486346 usec\nrounds: 9017"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 138166.92109850358,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033852865900889663",
            "extra": "mean: 7.237622377696817 usec\nrounds: 31746"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15402.886165275539,
            "unit": "iter/sec",
            "range": "stddev: 0.00004232159130406885",
            "extra": "mean: 64.92289751867496 usec\nrounds: 14266"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4573755.040375398,
            "unit": "iter/sec",
            "range": "stddev: 9.457202413592195e-8",
            "extra": "mean: 218.63873145210158 nsec\nrounds: 188680"
          }
        ]
      }
    ]
  }
}
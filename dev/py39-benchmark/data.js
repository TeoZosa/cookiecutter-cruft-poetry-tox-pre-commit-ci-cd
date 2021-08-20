window.BENCHMARK_DATA = {
  "lastUpdate": 1629472016092,
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
          "id": "63a8eafac9eb724085abd26512c3abdd62f73f8e",
          "message": "Merge pull request #293 from TeoZosa/dependabot/pip/hypothesis-6.14.9",
          "timestamp": "2021-08-20T13:36:26Z",
          "tree_id": "d610ca8e54593dc1c5300f6e408d22b89239e051"
        },
        "date": 1629472013551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15158.15061927211,
            "unit": "iter/sec",
            "range": "stddev: 0.000013763565204483256",
            "extra": "mean: 65.97110855519523 usec\nrounds: 1870"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3926434.1651634863,
            "unit": "iter/sec",
            "range": "stddev: 3.350871744895315e-7",
            "extra": "mean: 254.68401046237372 nsec\nrounds: 52084"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12347.5569016473,
            "unit": "iter/sec",
            "range": "stddev: 0.00001511312880143504",
            "extra": "mean: 80.98768104211685 usec\nrounds: 5565"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 121409.42008118625,
            "unit": "iter/sec",
            "range": "stddev: 0.000005128113907983905",
            "extra": "mean: 8.236593168234409 usec\nrounds: 23420"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14900.164120270416,
            "unit": "iter/sec",
            "range": "stddev: 0.000030084946661763358",
            "extra": "mean: 67.11335472067616 usec\nrounds: 8993"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3782688.4662608462,
            "unit": "iter/sec",
            "range": "stddev: 4.2660342212605337e-7",
            "extra": "mean: 264.3622410143301 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}
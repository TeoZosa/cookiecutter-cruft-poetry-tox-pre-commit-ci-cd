window.BENCHMARK_DATA = {
  "lastUpdate": 1623651857033,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "9ad25c5f061ac1b218850bf83fcc239099907d09",
          "message": ":memo: Fix Typeguard hyperlink line break",
          "timestamp": "2021-06-14T06:19:21Z",
          "tree_id": "45b8cd776c9361aad4ca51ce1c81361d2608fdf4"
        },
        "date": 1623651855588,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14603.889296694511,
            "unit": "iter/sec",
            "range": "stddev: 0.000029823771964434222",
            "extra": "mean: 68.47490964111479 usec\nrounds: 12063"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4383136.521129673,
            "unit": "iter/sec",
            "range": "stddev: 2.699701464830406e-7",
            "extra": "mean: 228.14712596322826 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12458.361210785812,
            "unit": "iter/sec",
            "range": "stddev: 0.000026613208829381333",
            "extra": "mean: 80.26737891772244 usec\nrounds: 7722"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 130440.13446511736,
            "unit": "iter/sec",
            "range": "stddev: 0.000008846232784309322",
            "extra": "mean: 7.666352109345782 usec\nrounds: 47170"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14787.611950430013,
            "unit": "iter/sec",
            "range": "stddev: 0.00002432965725120301",
            "extra": "mean: 67.62417105291438 usec\nrounds: 13680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4368438.529042432,
            "unit": "iter/sec",
            "range": "stddev: 3.3566331591274326e-7",
            "extra": "mean: 228.9147468484053 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}